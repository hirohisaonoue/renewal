<?php

/*--------------------------------------------------------------------------
	フォームメール - sformmmail2
	(c)Sapphirus.Biz

	※このスクリプトの文字エンコードは euc-jp から変更しないで下さい。
--------------------------------------------------------------------------*/

// 受け取る時のSubject（件名）
$mailSubject = '秋葉館.com取付お見積りフォームよりメールを受け付けました';

//送信メッセージ
$mailMessage = <<< EOD
以下の内容がフォームより送信されました。
────────────────────────────────────
■電話番号
{$sfm_mail->tel}

■郵便番号
{$sfm_mail->zip}

■都道府県
{$sfm_mail->address1}

■市区町村・番地
{$sfm_mail->address2}

■ビル・建物名
{$sfm_mail->address3}
{$sfm_mail->elevator}

■会社名
{$sfm_mail->campany}

■部署名
{$sfm_mail->unit}

■氏名
{$sfm_mail->name}

■ふりがな
{$sfm_mail->kana}

■メールアドレス
{$sfm_mail->email}

■Macの機種
{$sfm_mail->model1}

■Macの型番
{$sfm_mail->model2}

■元箱の有無
{$sfm_mail->box}

■Macの状態
{$sfm_mail->condition}
{$sfm_mail->conditiontxt}

■商品番号/商品名
{$sfm_mail->message}

■ハードディスク交換・増設
{$sfm_mail->hdd}

■ストレージタイプ
{$sfm_mail->stragetype}

────────────────────────────────────
□ユーザー情報
$userinfo
EOD;

?>
