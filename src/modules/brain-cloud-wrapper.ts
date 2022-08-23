import { BrainCloudClient } from "./brain-cloud-client";
import { BrainCloudReasonCodes } from "./brain-cloud-reason-codes";

interface InitializeParamsObject
{
    appId: string | null;
    secretKey: string | null;
    appVersion: string | null;
    serverUrl: string | null;
    secretMap: string | null;
};

export class BrainCloudWrapper
{
    public name = "BrainCloudWrapper";

    public client: BrainCloudClient;



    private wrapperName: string = "";
    private alwaysAllowProfileSwitch: boolean = true;
    private initializeParams: InitializeParamsObject = {
        appId: "",
        secretKey: "",
        appVersion: "",
        serverUrl: "",
        secretMap: null
    };

    constructor(wrapperName: string)
    {
        this.client = new BrainCloudClient(wrapperName);

        if (wrapperName !== undefined)
        {
            this.wrapperName = wrapperName;
        };


    };

    private initializeIdentity(isAnonymousAuth: boolean): void
    {
        let profileId: string = this.getStoredProfileId();
        let anonymousId: string = this.getStoredAnonymousId();

        if (profileId === null)
        {
            profileId = "";
        };

        if (anonymousId === null)
        {
            anonymousId = "";
        };

        if (profileId === "" || anonymousId === "")
        {
            //anonymousId = this.client.authentication.generateAnonymousId();
            profileId = "";
            this.setStoredAnonymousId(anonymousId);
            this.setStoredProfileId(profileId);
        };

        if (!isAnonymousAuth && this.alwaysAllowProfileSwitch)
        {
            profileId = "";
        };

        //this.client.initializeIdentity(profileId, anonymousId);
    };

    private authenticationResponseHandler(responseHandlerCallback: Function, result: any): void
    {
        if (result.status === 202 && result.reason_code === BrainCloudReasonCodes.codes.MANUAL_REDIRECT)
        {
            this.initializeParams.serverUrl = result.redirect_url !== undefined ? result.redirect_url : this.initializeParams.serverUrl;

            let newAppId: string | null = result.redirect_appid !== undefined ? result.redirect_appid : null;

            if (this.initializeParams.secretMap === null)
            {
                if (newAppId !== null)
                {
                    this.initializeParams.appId = newAppId;
                };

                //this.client.initialize(this.initializeParams.appId, this.initializeParams.secretKey, this.initializeParams.appVersion);

                //this.client.setServerUrl(this.initializeParams.serverUrl);
            }
            else
            {
                //this.client.initializeWithApps(this.initializeParams.appId, this.initializeParams.secretMap, this.initializeParams.appVersion);

                //this.client.setServerUrl(this.initializeParams.serverUrl);
            };

            this.initializeIdentity(true);
            //this.client.authentication.retryPreviousAuthenticate(responseHandlerCallback);

            return;
        };

        if (result.status === 200)
        {
            this.setStoredProfileId(result.data.profileId);
            this.setStoredSessionId(result.data.sessionId);
        };

        console.log(`Updated saved profileId to ${this.getStoredProfileId()}`);

        responseHandlerCallback(result);
    };

















    public setStoredSessionId(profileId: string)
    {
        throw new Error("Method not implemented.");
    };

    public setStoredProfileId(profileId: string)
    {
        throw new Error("Method not implemented.");
    };

    public setStoredAnonymousId(anonymousId: string)
    {
        throw new Error("Method not implemented.");
    };

    public getStoredAnonymousId(): string
    {
        throw new Error("Method not implemented.");
    }

    public getStoredProfileId(): string
    {
        throw new Error("Method not implemented.");
    }
    ;
};