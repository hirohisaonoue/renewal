<?php

/*--------------------------------------------------------------------------
	フォームメール - sformmmail2
	(c)Sapphirus.Biz

	※このスクリプトの文字エンコードは euc-jp から変更しないで下さい。
--------------------------------------------------------------------------*/

// 自動返信のSubject（件名）
$replySubject = '秋葉館.comお問合せフォームよりメールを受け付けました';

//送信メッセージ
$replyMessage = <<< EOD
以下の内容でフォームからの送信を受け付けました。
────────────────────────────────────
■氏名
{$sfm_mail->name}

■ふりがな
{$sfm_mail->kana}

■電話番号
{$sfm_mail->tel}

■メールアドレス
{$sfm_mail->email}

■件名
{$sfm_mail->subject}

■注文番号
{$sfm_mail->orderid}

■メッセージ
{$sfm_mail->message}
────────────────────────────────────
□ユーザー情報
$userinfo
EOD;

?>
