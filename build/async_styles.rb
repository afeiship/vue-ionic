#!/usr/bin/env ruby -wU
require 'git'
require 'fileutils'
require './modules/base_paths'
require './modules/env_reset'
include BasePath;
include EnvRest;

ROOT_PATH = BasePath.get_root_path(Dir.pwd);
IONIC_GIT_REPOSTIRY='git@github.com:afeiship/ionic-sass-helper.git';
EnvRest.clean(ROOT_PATH);

tmp = File.join(ROOT_PATH, '.tmp');
tmp_src = File.join(ROOT_PATH, '.tmp','src');
project_src =File.join(ROOT_PATH, 'src', 'styles');

#clone:
Git.clone IONIC_GIT_REPOSTIRY, File.join(ROOT_PATH ,'.tmp'),verbose:true;
puts "clone complete, to next!";


#list scss:
FileUtils.cd(tmp) do
  Dir.glob('**/{.*,*.*}').reject{ |f| f.include? '.scss' }.each do |item|
    FileUtils.rm_rf(item);
  end

  FileUtils.cp_r tmp_src, project_src, verbose: true;
end
