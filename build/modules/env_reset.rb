#!/usr/bin/env ruby -wKU
require "fileutils";
module EnvRest
  def clean_tmp(rootPath)
    FileUtils.rm_f(rootPath+'./tmp');
  end
end
