<?php

/*--------------------------------------------------------------------------
	�ե�����᡼�� - sformmmail2
	(c)Sapphirus.Biz

	�����Υ�����ץȤ�ʸ�����󥳡��ɤ� euc-jp �����ѹ����ʤ��ǲ�������
--------------------------------------------------------------------------*/

// ��ư�ֿ���Subject�ʷ�̾��
$replySubject = '���մ�.com���դ����Ѥ�ե�������᡼�������դ��ޤ���';

//������å�����
$replyMessage = <<< EOD
�ʲ������Ƥǥե����फ�������������դ��ޤ�����
������������������������������������������������������������������������
�������ֹ�
{$sfm_mail->tel}

��͹���ֹ�
{$sfm_mail->zip}

����ƻ�ܸ�
{$sfm_mail->address1}

���Զ�Į¼������
{$sfm_mail->address2}

���ӥ롦��ʪ̾
{$sfm_mail->address3}
{$sfm_mail->elevator}

�����̾
{$sfm_mail->campany}

������̾
{$sfm_mail->unit}

����̾
{$sfm_mail->name}

���դ꤬��
{$sfm_mail->kana}

���᡼�륢�ɥ쥹
{$sfm_mail->email}

��Mac�ε���
{$sfm_mail->model1}

��Mac�η���
{$sfm_mail->model2}

����Ȣ��̵ͭ
{$sfm_mail->box}

��Mac�ξ���
{$sfm_mail->condition}
{$sfm_mail->conditiontxt}

�������ֹ�/����̾
{$sfm_mail->message}

���ϡ��ɥǥ������򴹡�����
{$sfm_mail->hdd}

�����ȥ졼��������
{$sfm_mail->stragetype}

������������������������������������������������������������������������
���桼��������
$userinfo
EOD;

?>