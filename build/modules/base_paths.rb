#!/usr/bin/env ruby -wKU
require "fileutils";
module BasePath
  def has_git_file?(dir)
    return Dir.entries(dir).include? ".git";
  end

  def get_root_path(dir)
    if !has_git_file? dir
      Dir.chdir(dir);
      FileUtils.cd('..', verbose: false);
      return get_root_path(Dir.pwd);
    else
      return Dir.pwd;
    end
  end
end
