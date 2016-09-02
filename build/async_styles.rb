#!/usr/bin/env ruby -wKU
require "git";

require "./modules/base_paths";
require "./modules/env_reset";
include BasePath;
include EnvRest;

$rootPath= BasePath.get_root_path(Dir.pwd);
EnvRest.clean_tmp($rootPath);
Git.clone('git@github.com:afeiship/ionic-sass-helper.git',$rootPath+'/.tmp/ionic-sass-helper');
