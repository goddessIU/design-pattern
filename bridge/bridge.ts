enum Level {
    SEVERE,
    URGENCY,
    NORMAL,
    TRIVIAL
};

interface MsgSender {
    send(message: string): void;
}

class TelephoneMsgSender implements MsgSender {
    private telephones: Array<string> = [];

    public constructor(telephones: Array<string>) {
        this.telephones = telephones;
    }

    public send(message: string): void {
        //...
    }
}

class WechatMsgSender implements MsgSender {
    private telephones: Array<string> = [];

    public constructor(telephones: Array<string>) {
        this.telephones = telephones;
    }

    public send(message: string): void {
        //...
    }
}

abstract class Notificationa {
    protected msgSender: MsgSender;

    public constructor(msgSender: MsgSender) {
        this.msgSender = msgSender;
    }

    public abstract notify(message: string): void;
}

class SeverNotification extends Notificationa {
    constructor(msgSender: MsgSender) {
        super(msgSender);
    }

    public notify(message: string) {
        this.msgSender.send(message);
    }
};