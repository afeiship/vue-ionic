#!/usr/bin/env ruby -wKU
require 'fileutils'
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
end
