#!/bin/bash

#MikuMikuDance64 with MikuMikuEffect64 install base create script.

#This script created by Midnight Express Ginga81(ginga81) 2024
#This script is Public Domain

#I checked this script on Ubuntu22/24.04 and Wine-9.0 and winetricks 20240105-next

#適当なフォルダにこのスクリプトを用意し、実行可能権限を付与して実行すると自動的に準備を整えます。
#実行した後MikuMikuDance_v932x64.zip、MMEffect_x64_v037.zipをWindowsと同じ方法で
#~/.WineMMD64/drive_c/Program Files/以下に展開するだけです。
#実行は
#WINEPREFIX=~/.WineMMD64 wine ~/.WineMMD64/drive_c/Program\ Files/MikuMikuDance_v932x64/MikuMikuDance.exe
#アンインストールは~/.WineMMD64をまるごと消せば終わりで、設定ファイルは残らず綺麗に消えます。
#AVI出力は1920x1080で検証し、MJPEG Compressorでのみ可能でした。
#このスクリプトではパスワードを要求しないようあえてsudo系は外してます。

WINEPREFIX=~/.WineMMD64 wineboot
WINEPREFIX=~/.WineMMD64 winetricks -q vcrun2005 vcrun2008 vcrun2010 d3dxof d3dx9_43 vcrun2013 fakejapanese_ipamona devenum quartz qcap qedit
WINEPREFIX=~/.WineMMD64 wine reg add HKCU\\Software\\Wine\\DllOverrides /v msvcr90 /t reg_sz /d "builtin"
WINEPREFIX=~/.WineMMD64 wine reg add HKCU\\Software\\Wine\\DllOverrides /v d3d9 /t reg_sz /d "native,builtin"
WINEPREFIX=~/.WineMMD64 wine reg add HKCU\\Software\\Wine\\DllOverrides /v d3dx9_43 /t reg_sz /d "native,builtin"
WINEPREFIX=~/.WineMMD64 wine reg add HKCU\\Software\\Wine\\DllOverrides /v d3dxof /t reg_sz /d "native,builtin"
WINEPREFIX=~/.WineMMD64 wine reg add HKCU\\Software\\Wine\\DllOverrides /v devenum /t reg_sz /d "builtin"
WINEPREFIX=~/.WineMMD64 wine reg add HKCU\\Software\\Wine\\DllOverrides /v quartz /t reg_sz /d "native,builtin"
WINEPREFIX=~/.WineMMD64 wine reg add HKCU\\Software\\Wine\\DllOverrides /v qcap /t reg_sz /d "native,builtin"
WINEPREFIX=~/.WineMMD64 wine reg add HKCU\\Software\\Wine\\DllOverrides /v qedit /t reg_sz /d "native,builtin"


#d3dcompiler_43とDirectshowは必ず最後にこの順番で入れなければならない。
WINEPREFIX=~/.WineMMD64 winetricks -q d3dcompiler_43
WINEPREFIX=~/.WineMMD64 winetricks -q directshow gdiplus win7

WINEPREFIX=~/.WineMMD64 winetricks -q dxvk

