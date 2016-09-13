#!/usr/bin/env ruby -wU
require 'fileutils'
require 'rugged'
require './modules/sync_fonts'

include SyncFonts

ROOT_PATH = File.dirname Rugged::Repository.discover.path


SyncFonts.create_ionic_json(ROOT_PATH)
