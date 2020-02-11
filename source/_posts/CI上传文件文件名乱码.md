---
title: CI上传文件文件名乱码
abbrlink: 3944560991
date: 2020-02-10 17:08:30
tags: PHP
---

1. 修改`system—-libraries —–upload—–do_upload`中的相对应内容为
```PHP
if ( ! @copy($this->file_temp, iconv(“UTF-8”, “gb2312”, $this->upload_path.$this->file_name)))
{
  if ( ! @move_uploaded_file($this->file_temp, iconv(“UTF-8”, “gb2312”, $this->upload_path.$this->file_name)))
  {
    $this->set_error(‘upload_destination_error’);
    return FALSE;
  }
}
```
修改同文件中的set_filename
```PHP
public function set_filename($path, $filename)
{
  if ($this->encrypt_name == TRUE)
  {
    mt_srand();
    $filename = md5(uniqid(mt_rand())).$this->file_ext;
  }
  $filename = iconv(‘UTF-8’, ‘GB2312’, $filename);//将$filename中的文件名转换为GB2312编码
  if ( ! file_exists($path.$filename))
  {
    $filename = iconv(‘GB2312’, ‘UTF-8’, $filename);//将编码转回UTF-8
    return $filename;
  }
  $filename = str_replace($this->file_ext, ‘’, $filename);
  $new_filename = ‘’;
  for ($i = 1; $i < 100; $i++)
  {
    if ( ! file_exists($path.$filename.$i.$this->file_ext))
    {
      $new_filename = $filename.$i.$this->file_ext;
      break;
    }
  }
  if ($new_filename == ‘’)
  {
    $this->set_error(‘upload_bad_filename’);
    return FALSE;
  }
  else
  {
    $new_filename = iconv(‘GB2312’, ‘UTF-8’, $new_filename);//将编码转回UTF-8
    return $new_filename;
  }
}
```