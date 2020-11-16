<?php

/*--------------------------------------------------------------------------
	フォームメール - sformmmail2
	(c)Sapphirus.Biz

	※このスクリプトの文字エンコードは euc-jp から変更しないで下さい。
--------------------------------------------------------------------------*/

// 自動返信のSubject（件名）
$replySubject = '《秋葉館》Paid後払い決済ご依頼フォームよりメールを受け付けました';

//送信メッセージ
$replyMessage = <<< EOD
以下の内容でフォームからの送信を受け付けました。
────────────────────────────────────
■電話番号
{$sfm_mail->tel}

■郵便番号
{$sfm_mail->zip}

■都道府県
{$sfm_mail->address1}

■市区町村・番地
{$sfm_mail->address2}

■市区町村・番地
{$sfm_mail->address2}

■ビル・建物名
{$sfm_mail->address3}

■会社名
{$sfm_mail->campany}

■部署名
{$sfm_mail->unit}

■氏名
{$sfm_mail->name}

■ふりがな
{$sfm_mail->kana}

■電話番号
{$sfm_mail->tel}

■FAX
{$sfm_mail->fax}

■メールアドレス
{$sfm_mail->email}

■商品番号/商品名
{$sfm_mail->message}

────────────────────────────────────
□ユーザー情報
$userinfo
EOD;

?>
