module ApplicationHelper
  def gulp_aset_path(path)
    path = REV_MANIFEST[path] if defined?(REV_MANIFEST)
    "/assets/#{path}"
  end
end
