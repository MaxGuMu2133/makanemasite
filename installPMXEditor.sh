#!/bin/bash

#PMXEditor64 install base create script.
#This script created by Midnight Express Ginga81(ginga81) 2024
#This script is Public Domain
#I checked this script on Ubuntu22/24.04 and Wine-9.0 and winetricks 20240105-next
#適当なフォルダにこのスクリプトを用意し、実行可能権限を付与して実行すると自動的に準備を整えます。
#実行した後PmxEditor_0275.zipをWindowsと同じ方法で
#~/.WinePMXEditor/drive_c/Program Files/以下に展開するだけです。
#実行は
#WINEPREFIX=~/.WinePMXEditor wine ~/.WinePMXEditor/drive_c/Program\ Files/PmxEditor_0275/PmxEditor.exe
#アンインストールは~/.WinePMXEditorをまるごと消せば終わりで、設定ファイルは残らず綺麗に消えます。
#16.04以降用としてTakaoPゴシックを表示に用いていました。19.04以降のNotoフォントに置き換わったUbuntuでは、TakaoPGothicフォントを
#sudo apt install fonts-takao-pgothic
#としてインストールしてください。 
#これはPmxEditorでフォントが文字化けする対策ですので必須です。
#本当はNoto Sansにしたかったのですが、フォントの文字例えばTakaoは TakaoPGothic.ttf,Takao Pゴシックと定義されるのですが、これのNoto Sansが私に見つけられなかったためです。ごめんなさい。
#PmxEditorがウインドウのみで何も出ない場合、sudo apt install winbindを試してください。
#このスクリプトではパスワードを要求しないようあえてsudo系は外してます。

WINEPREFIX=~/.WinePMXEditor wineboot
WINEPREFIX=~/.WinePMXEditor winetricks -q d3dxof d3dx9_43 d3dcompiler_43 win7 fakejapanese_ipamona vcrun2010 dotnet48
WINEPREFIX=~/.WinePMXEditor wine reg add HKCU\\Software\\Wine\\DllOverrides /v msvcr90 /t reg_sz /d "builtin"
WINEPREFIX=~/.WinePMXEditor wine reg add HKCU\\Software\\Wine\\DllOverrides /v d3d9 /t reg_sz /d "native,builtin"
WINEPREFIX=~/.WinePMXEditor wine reg add HKCU\\Software\\Wine\\DllOverrides /v d3dx9_43 /t reg_sz /d "native,builtin"
clear
echo 'Tahoma' はすでに存在します。上書きしますか?の質問にはyを押してENTERしてください。
echo 16.04以降用としてTakaoPゴシックを表示に用います。19.04などNotoフォントに置き換わったUbuntuでは、TakaoPGothicフォントを
echo sudo apt install fonts-takao-pgothic としてインストールしてください。
WINEPREFIX=~/.WinePMXEditor wine reg add "HKLM\\Software\\Microsoft\\Windows NT\\CurrentVersion\\FontLink\\SystemLink" /v Tahoma /t reg_multi_sz /d "MSGOTHIC.TTC,MS UI Gothic\0MINGLIU.TTC,PMingLiU\0SIMSUN.TTC,SimSun\0GULIM.TTC,Gulim\0TakaoPGothic.ttf,Takao Pゴシック"


