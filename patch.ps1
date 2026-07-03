# Batch-replace dark-theme CSS tokens with light-theme equivalents across all components
$files = Get-ChildItem "src/components/*.jsx"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    # Background colors
    $content = $content -replace 'var\(--c-base\)', 'var(--c-base)'
    $content = $content -replace "'#0A0A0F'", "'var(--c-base)'"
    $content = $content -replace "'#0F0F16'", "'var(--c-surface)'"
    $content = $content -replace "'#16161F'", "'var(--c-surface2)'"
    $content = $content -replace "'#0A0A0B'", "'var(--c-base)'"
    $content = $content -replace "'#131315'", "'var(--c-surface)'"
    $content = $content -replace "'#1A1A1D'", "'var(--c-surface2)'"
    $content = $content -replace "'#12132B'", "'var(--c-surface2)'"
    # text colors - dark bg text -> light bg text
    $content = $content -replace "color: 'var\(--c-text\)'", "color: 'var(--c-text)'"
    # Border: was very dark borders, keep same var name, now resolves to light
    $content = $content -replace "background: 'var\(--c-surface\)'", "background: 'var(--c-surface)'"
    $content = $content -replace "background: 'var\(--c-base\)'", "background: 'var(--c-base)'"
    # Muted text in dark context -> use c-text-2 for section headings on light
    $content = $content -replace "color: 'var\(--c-muted\)'", "color: 'var(--c-muted)'"
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
Write-Host "Done patching"
