$js = [IO.File]::ReadAllText('seen.js')

$clsms = [regex]::Matches($js,'(seen[\w_\.]+)\s*=\s*\(function\s*\((\w*)\)')
$funcms = [regex]::Matches($js,'(seen[\w_\.]+)\s*=\s*function')
$objms = [regex]::Matches($js,'(seen[\w_\.]+)\s*=\s*{')

#对象
$js = [regex]::Replace($js,'seen\.([\w_\.]+)\s*=\s*{','export let $1 = {')

#函数
#$funcms = [regex]::Replace($js,'seen\.[\w_\.]+)\s*=\s*function')

#类型
foreach($m in $clsms)
{
	$className = $m.Groups[1].Value
	$baseclassName = $className.Split('.')[-1]
	$newClassName = $className.Replace('.', '$')
	$newclassdec = "export class $newClassName"
	$js = $js.Replace($m.Groups[0].Value, $newclassdec)
	$start = $js.IndexOf($newclassdec)
	$end = $js.IndexOf('})();', $start)
	
	if($end -gt $start)
	{
		$classCtx = $js.Substring($start,$end-$start)
		$mths = @()
		$mms = [regex]::Matches($classCtx, "$baseclassName\.prototype\.([\w_]+) = function")	
		$mms += [regex]::Matches($classCtx, "$baseclassName\.prototype\.([\w_]+) = {")	
		$mths += $mms | % {$_.Groups[1].Value}
		$ms = [regex]::Matches($classCtx, 'this\.(\w+)\W')
		$vardec = $ms | % { 
		$var = $_.Groups[1].Value
		if($mths -notcontains $var)
		{$var+":any"} }
		$varset = @{}
		$vardec | % {$varset[$_] = 0}
		$vardecstr = $varset.Keys -join "`n"
	}
	
	
	$js = $js.Replace("function $baseclassName", "$vardecstr`nconstructor")
	$js = [regex]::Replace($js, "$baseclassName\.prototype\.([\w_]+) = function", '$1')	
	$js = [regex]::Replace($js, "$baseclassName\.prototype\.([\w_]+) = {", '$1 = {')	
	$js = [regex]::Replace($js, "$baseclassName\.([\w_]+) = function", 'static $1')	
	$js = [regex]::Replace($js, "$baseclassName\.([\w_]+) = ([\w])", 'static $1 = $2')	
	$js = $js.Replace("return $baseclassName;", "")
	
}
$ms = [regex]::Matches($js, '^}\)\(\);', [System.Text.RegularExpressions.RegexOptions]::Multiline)
$js = [regex]::Replace($js, '^}\)\(\);', '}', [System.Text.RegularExpressions.RegexOptions]::Multiline)	

[IO.File]::WriteAllText('seen.ts',$js)
