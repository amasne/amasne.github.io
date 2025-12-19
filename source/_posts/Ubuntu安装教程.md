---
title: Ubuntu 24.04 LTS 安装教程
categories: Linux
tags:
  - Ubuntu
  - Linux
  - 安装教程
comment: true
abbrlink: 64744
date: 2025-12-19 11:46:00
---

# Ubuntu 24.04 LTS 安装教程

Ubuntu 是最流行的 Linux 发行版之一，以其易用性和强大的社区支持而闻名。本教程将详细介绍如何安装 Ubuntu 24.04 LTS（Long Term Support，长期支持版本）。

## 准备工作

### 系统要求

在开始安装之前，请确保您的计算机满足以下最低要求：

| 硬件配置 | 最低要求             | 推荐配置                    |
| -------- | -------------------- | --------------------------- |
| CPU      | 2 GHz 双核处理器     | 2 GHz 四核处理器或更高      |
| 内存     | 4 GB RAM             | 8 GB RAM 或更高             |
| 硬盘空间 | 25 GB                | 50 GB 或更高                |
| 显卡     | 支持 1024×768 分辨率 | 支持 1920×1080 或更高分辨率 |

### 下载 Ubuntu 镜像

1. 访问 Ubuntu 官方网站：[https://ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)
2. 下载 Ubuntu 24.04 LTS Desktop 版本（ISO 文件，约 5-6 GB）
3. 建议选择国内镜像源加速下载，如：
    - 清华大学开源软件镜像站：[https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/)
    - 阿里云镜像：[https://mirrors.aliyun.com/ubuntu-releases/](https://mirrors.aliyun.com/ubuntu-releases/)

### 制作启动盘

#### Windows 用户推荐使用 Rufus

1. 下载 Rufus：[https://rufus.ie](https://rufus.ie)
2. 准备一个至少 8 GB 的 U 盘（注意：U 盘数据会被清除）
3. 打开 Rufus，选择您的 U 盘
4. 点击"选择"按钮，选择下载好的 Ubuntu ISO 文件
5. 分区类型选择"GPT"（适用于 UEFI 系统）
6. 文件系统选择"FAT32"
7. 点击"开始"制作启动盘

#### macOS 用户推荐使用 balenaEtcher

1. 下载 balenaEtcher：[https://www.balena.io/etcher/](https://www.balena.io/etcher/)
2. 打开 Etcher
3. 点击"Flash from file"选择 ISO 文件
4. 点击"Select target"选择 U 盘
5. 点击"Flash!"开始制作

#### Linux 用户可使用 dd 命令

```bash
# 查看 U 盘设备名称（通常是 /dev/sdb 或 /dev/sdc）
sudo fdisk -l

# 制作启动盘（请替换 /dev/sdX 为实际的设备名称）
sudo dd if=ubuntu-24.04-desktop-amd64.iso of=/dev/sdX bs=4M status=progress && sync
```

## 安装步骤

### 1. 从 U 盘启动

1. 将制作好的启动 U 盘插入电脑
2. 重启电脑，进入 BIOS/UEFI 设置（通常按 F2、F12、Del 或 Esc 键）
3. 在 Boot 选项中，将 U 盘设置为第一启动项
4. 保存设置并重启

### 2. 选择安装选项

启动后，您会看到 Ubuntu 的欢迎界面：

1. 选择语言（可以选择"中文（简体）"）
2. 选择"安装 Ubuntu"或"试用 Ubuntu"
    - **试用 Ubuntu**：在不安装的情况下体验系统
    - **安装 Ubuntu**：直接进入安装流程

### 3. 键盘布局

1. 选择键盘布局（中文用户通常选择"汉语"或"English (US)"）
2. 可以在文本框中测试键盘输入
3. 点击"继续"

### 4. 更新和其他软件

您可以选择：

-   **正常安装**：包含 Web 浏览器、办公软件、游戏和媒体播放器等
-   **最小安装**：仅包含 Web 浏览器和基本工具

其他选项：

-   ☑️ 安装 Ubuntu 时下载更新（推荐勾选）
-   ☑️ 安装第三方软件以支持图形和 Wi-Fi 硬件（推荐勾选）

### 5. 安装类型

这是最关键的一步，请仔细选择：

#### 选项 1：擦除磁盘并安装 Ubuntu

-   适用于：将整个硬盘用于 Ubuntu
-   特点：最简单，会清除硬盘上的所有数据
-   ⚠️ **警告**：选择此选项前请务必备份重要数据！

#### 选项 2：与 Windows 共存（双系统）

-   适用于：保留现有的 Windows 系统
-   特点：可以在开机时选择启动 Ubuntu 或 Windows
-   建议：为 Ubuntu 分配至少 50 GB 空间

#### 选项 3：其他选项（手动分区）

适合高级用户，可以自定义分区方案。推荐分区配置：

| 挂载点    | 文件系统 | 大小                  | 说明                          |
| --------- | -------- | --------------------- | ----------------------------- |
| /boot/efi | FAT32    | 512 MB                | EFI 系统分区（UEFI 启动必需） |
| /         | ext4     | 50-100 GB             | 根分区，存放系统文件          |
| /home     | ext4     | 剩余空间              | 主目录，存放用户文件          |
| swap      | swap     | 与内存大小相同或 2 倍 | 交换分区（可选）              |

### 6. 选择时区

1. 点击地图选择您所在的城市
2. 或在下拉菜单中选择"Shanghai"（上海）
3. 点击"继续"

### 7. 创建用户账户

填写以下信息：

-   **您的姓名**：显示名称
-   **计算机名**：主机名（用于网络识别）
-   **用户名**：登录账户名（建议使用小写字母）
-   **密码**：设置强密码
-   **确认密码**：再次输入密码

登录选项：

-   ○ 自动登录（不推荐，安全性较低）
-   ● 需要密码登录（推荐）

### 8. 开始安装

1. 点击"现在安装"
2. 确认分区更改（会弹出确认对话框）
3. 等待安装完成（通常需要 15-30 分钟）

安装过程中，您可以观看 Ubuntu 的介绍幻灯片。

### 9. 完成安装

1. 安装完成后，系统会提示"安装完成"
2. 点击"现在重启"
3. 重启时，系统会提示移除安装介质（拔出 U 盘）
4. 按 Enter 键继续

## 首次启动配置

### 1. 登录系统

使用安装时创建的用户名和密码登录。

### 2. 在线账户（可选）

可以选择关联 Google、Microsoft 等在线账户，或选择"跳过"。

### 3. Livepatch（可选）

Livepatch 允许在不重启系统的情况下安装内核安全更新。

-   可以使用 Ubuntu One 账户启用（免费）
-   或选择"稍后设置"

### 4. 帮助改进 Ubuntu（可选）

选择是否向 Canonical 发送系统信息。

### 5. 隐私设置

选择是否启用位置服务。

### 6. 准备就绪

点击"完成"，开始使用 Ubuntu！

## 安装后的配置

### 更新系统

首次登录后，建议立即更新系统：

```bash
# 更新软件包列表
sudo apt update

# 升级已安装的软件包
sudo apt upgrade -y

# 清理不需要的包
sudo apt autoremove -y
```

### 安装中文输入法

```bash
# 安装 ibus 拼音输入法
sudo apt install ibus-libpinyin

# 或安装搜狗输入法（需要添加第三方源）
# 访问：https://shurufa.sogou.com/linux
```

配置输入法：

1. 打开"设置" → "区域与语言"
2. 点击"输入源"下的"+"号
3. 选择"中文" → "中文（智能拼音）"

### 安装常用软件

```bash
# 开发工具
sudo apt install git vim curl wget build-essential

# 浏览器（Firefox 已预装，可安装 Chrome）
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb

# 媒体播放器
sudo apt install vlc

# 办公软件（LibreOffice 已预装）
# 或安装 WPS Office：https://www.wps.cn/product/wpslinux/

# 截图工具
sudo apt install flameshot
```

### 更换软件源（可选，提升下载速度）

使用阿里云或清华源：

```bash
# 备份原有源
sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup

# 编辑源文件
sudo nano /etc/apt/sources.list
```

将内容替换为阿里云镜像源，然后：

```bash
# 更新软件包列表
sudo apt update
```

## 常见问题

### Q1: 安装时提示"无法创建分区"

**A:** 可能是由于磁盘使用了 MBR 分区表。建议：

-   转换为 GPT 分区表（使用 GParted 工具）
-   或在 BIOS 中切换到 Legacy 模式

### Q2: 双系统时找不到 Windows

**A:** 安装完成后运行：

```bash
sudo update-grub
```

### Q3: 无线网卡无法识别

**A:** 某些无线网卡需要额外驱动，使用有线连接后：

```bash
sudo ubuntu-drivers autoinstall
sudo reboot
```

### Q4: 分辨率不正确

**A:** 安装显卡驱动：

```bash
# NVIDIA 显卡
sudo ubuntu-drivers autoinstall

# AMD 显卡
sudo apt install mesa-vulkan-drivers
```

## 总结

恭喜您成功安装 Ubuntu！Ubuntu is a powerful and user-friendly operating system. 通过本教程，您已经完成了从准备工作到首次配置的全过程。

接下来，您可以：

-   🎯 探索 Ubuntu 的各种功能
-   📚 学习 Linux 命令行操作
-   🛠️ 根据需求安装更多软件
-   🌐 加入 Ubuntu 中文社区获取帮助

**有用的资源：**

-   Ubuntu 官方文档：[https://help.ubuntu.com](https://help.ubuntu.com)
-   Ubuntu 中文社区：[https://forum.ubuntu.org.cn](https://forum.ubuntu.org.cn)
-   Ask Ubuntu：[https://askubuntu.com](https://askubuntu.com)

Happy Ubuntu-ing! 🐧
