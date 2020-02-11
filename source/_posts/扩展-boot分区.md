---
title: 扩展/boot分区
tags: Linux
abbrlink: 3711347257
date: 2020-02-11 13:47:17
---

### how to expend the capicity of /boot partition in linux
1. use the Disks offered in the System to build a partition for new /boot, and click “Mount the filesystem” signed by a triangle icon
2. copy all the things form old /boot partition to new /boot partition . new /boot partition willbe mounted in /mnt
3. click the old /boot prtition in Disks, click buttons as following
- “More actions” signed by a gear
- “Edit Mount Options…”, meanwhile, wtrite the config down for later
- uncheck “Mount at Startup”
- modify “Mount Point” to something else, such as “/boot_old”
- and click OK
4. click the old /boot prtition in Disks, and “Unmount the filesystem”. click buttons as following
- “More actions” signed by a gear, and click “Edit Partition” modify “Type” to linux filesystem and Change
- “Edit Mount Options…” copy the config form old one
= OK
5. and now it can work almost, but there is something broken likely.to solve this , you can use the Boot Repair. here is its brochure:

### installation Boot Repair
```bash
sudo add-apt-repository ppa:yannubuntu/boot-repair
sudo apt-get update
sudo apt-get install -y boot-repair && boot-repair
```
1. Recommended repair
- launch Boot-Repair from either :
- the Dash (the Ubuntu logo at the top-left of the screen)
- or by typing ‘boot-repair’ in a terminal
- Then click the “Recommended repair” button. When repair is finished, note the URL (paste.ubuntu.com/XXXXX) that appeared on a paper, then reboot and check if you recovered access to your OSs.

- If the repair did not succeed, indicate the URL to people who help you by email or forum.

- if you have trouble in booting, if you computer is booted by grub2, here is you solutions:
    - ls
    - find the boot file location
    - set root = (hd0, gpt0)
    (hd0,gpt0) is your boot file location
    - linux `/path/to/your/bootfile(vmlinuz*)` `root=/dev/sda0`
    - `/dev/sda0` is your root location
    - initrd /path/to/your/bootfile(initrd*)
    - boot
    
now you can boot your computer.