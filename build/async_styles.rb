#!/usr/bin/env ruby -wU
require 'git'
require 'rugged'
require 'fileutils'
require './modules/base_paths'
require './modules/env_reset'
include BasePath;
include EnvRest;

ROOT_PATH = BasePath.get_root_path(Dir.pwd);
GIT_REPOSTIRY='git@github.com:afeiship/ionic-sass-helper.git';
EnvRest.clean(ROOT_PATH);

tmp = File.join(ROOT_PATH, '.tmp');
tmp_src = File.join(ROOT_PATH, '.tmp','src');
project_src =File.join(ROOT_PATH, 'src', 'styles');

#clone:
g = Git.clone GIT_REPOSTIRY, tmp;
g.log.each {|l| puts l.sha };


#list scss:
FileUtils.cd(tmp) do
  Dir.glob('**/{.*,*.*}').reject{ |f| f.include? '.scss' }.each do |item|
    FileUtils.rm_rf(item);
  end

  FileUtils.cp_r tmp_src, project_src, verbose: true;
end
