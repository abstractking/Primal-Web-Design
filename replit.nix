{pkgs}: {
  deps = [
    pkgs.udev
    pkgs.libxkbcommon
    pkgs.cups
    pkgs.cairo
    pkgs.pango
    pkgs.alsa-lib
    pkgs.mesa
    pkgs.libdrm
    pkgs.expat
    pkgs.xorg.libXrandr
    pkgs.xorg.libXfixes
    pkgs.xorg.libXext
    pkgs.xorg.libXdamage
    pkgs.xorg.libXcomposite
    pkgs.xorg.libxcb
    pkgs.xorg.libX11
    pkgs.dbus
    pkgs.at-spi2-atk
    pkgs.atk
    pkgs.glib
    pkgs.nspr
    pkgs.nss
  ];
}
