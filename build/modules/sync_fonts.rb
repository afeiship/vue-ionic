#!/usr/bin/env ruby -wKU
# https://www.ralfebert.de/snippets/ruby-rails/regex_cheat_sheet/

require 'fileutils'
require 'json'
module SyncFonts
  def copy_fonts(rootPath)
    ionioncs_dir = File.join(rootPath, '/node_modules/ionicons/dist')
    ionioncs_scss_dir = File.join(ionioncs_dir, '/scss')
    ionioncs_fonts_dir = File.join(ionioncs_dir, '/fonts')
    fonts_dir = File.join(rootPath, '/src/styles/src/fonts/')

    # copy scss
    FileUtils.cd(ionioncs_scss_dir) do
      FileUtils.cp_r %w(ionicons-icons.scss ionicons-variables.scss), fonts_dir
    end
    # copy fonts
    FileUtils.cp_r Dir[File.join(ionioncs_fonts_dir, '*.*')], fonts_dir
  end

  def create_ionic_json(rootPath)
    ionioncs_scss_dir = File.join(rootPath, '/node_modules/ionicons/dist/scss')
    file_contents = File.read(File.join(ionioncs_scss_dir, 'ionicons-icons.scss'))
    fonts_dir = File.join(rootPath, '/src/styles/src/fonts/icons.json')
    icons_hash =file_contents.scan(/\.ion-(.*?):(?:.*?)/i).map { |e| e[0]  };
    File.open(fonts_dir,"w") do |f|
      f.write(JSON.pretty_generate(icons_hash))
    end
    # puts file_contents.scan(/\.ion-(.*?):(?:.*?)/im)
  end
end
