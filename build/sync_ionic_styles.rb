#!/usr/bin/env ruby -wU
require 'git'
require 'rugged'
require 'fileutils'
require 'ruby-progressbar';
require './modules/env_reset'
require './modules/sync_fonts'
include EnvRest
include SyncFonts

ROOT_PATH = File.dirname Rugged::Repository.discover.path
GIT_REPOSTIRY = 'https://github.com/driftyco/ionic.git';
EnvRest.clean(ROOT_PATH);


progressbar = ProgressBar.create( :format => "%a %b %c/%C\u{15E7}%i %p%% %t",
                    :progress_mark  => '=',
                    :throttle_rate => 0.1,
                    :remainder_mark => "\u{FF65}",
                    :starting_at    => 0)
tmp = File.join(ROOT_PATH, '.tmp');
tmp_src = File.join(ROOT_PATH, '.tmp','src');
project_src =File.join(ROOT_PATH, 'src', 'styles');

# puts Rugged::Repository.attributes_name;
Rugged::Repository.clone_at(GIT_REPOSTIRY, tmp, {
  checkout_branch:'master',
  transfer_progress:lambda { |total_objects, indexed_objects, received_objects, local_objects, total_deltas, indexed_deltas, received_bytes|
    if received_objects == 0
      progressbar.total = total_objects;
    end

    if (received_objects < total_objects) && (progressbar.progress < progressbar.total)
      progressbar.increment;
    end
  }
});

#list scss:
FileUtils.cd(tmp) do
  Dir.glob('**/{.*,*.*}').reject{ |f| f.include? '.scss' }.each do |item|
    # FileUtils.rm_rf(item);
  end

  FileUtils.cp_r tmp_src, project_src;
end

SyncFonts.copy_fonts(ROOT_PATH);
SyncFonts.copy_fonts_json(ROOT_PATH);
