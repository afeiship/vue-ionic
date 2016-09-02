#!/usr/bin/env ruby -wKU
require "fileutils";
module EnvRest

  def clean(rootPath)
    # clean .tmp,src/styles
    tmp_dir = File.join(rootPath,'.tmp');
    style_dir =  File.join(rootPath,'src','styles');
    FileUtils.rm_rf tmp_dir;
    FileUtils.rm_rf style_dir;
    # midkr
    FileUtils.mkdir_p tmp_dir;
    FileUtils.mkdir_p style_dir;
  end

end
