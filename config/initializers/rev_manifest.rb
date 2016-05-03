rev_manifest_path = "public/assets/rev-manifest.json"

if File.exists?(rev_manifest_path)
  REV_MANIFEST = JSON.parse(File.read(rev_manifest_path))
end
