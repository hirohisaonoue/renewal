<?php

/*--------------------------------------------------------------------------
	フォームメール - sformmmail2
	(c)Sapphirus.Biz

	※このスクリプトの文字エンコードは euc-jp から変更しないで下さい。
--------------------------------------------------------------------------*/

// 受け取る時のSubject（件名）
$mailSubject = "【秋葉館 問合せフォーム】{$sfm_mail->subject}";

//送信メッセージ
$mailMessage = <<< EOD
以下の内容がフォームより送信されました。
────────────────────────────────────
■件名
{$sfm_mail->subject}

■注文番号
{$sfm_mail->orderid}

■メッセージ
{$sfm_mail->message}

────────────────────────────────────

■氏名
{$sfm_mail->name}

■ふりがな
{$sfm_mail->kana}

■電話番号
{$sfm_mail->tel}

■メールアドレス
{$sfm_mail->email}
────────────────────────────────────
□ユーザー情報
$userinfo
EOD;

?>
