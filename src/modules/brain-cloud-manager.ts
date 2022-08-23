export class BrainCloudManager
{
    private sendQueue: any[] = [];
    private inProgressQueue: any[] = [];
    private sessionId: string = "";
    public packetId: number = -1;


    public appId: string = "";
    public secret: string = "";
    public secretMap: { [key: string]: string; } = {};
    public appVersion: string = "";

    public requestInProgress: boolean = false;
    public bundleDelayActive: boolean = false;

    private statusCodeCache: number = 403;
    private reasonCodeCache: number = 40304;
    private statusMessageCache: string = "No session";


    private _isInitialized: boolean = false;
    private _isAuthenticated: boolean = false;


    public debugEnabled: boolean = false;

    public serverUrl: string = "https://api.braincloudservers.com";
    public dispatcherUrl: string = this.serverUrl + "/dispatcherv2";
    public fileUploadUrl: string = this.serverUrl + "/uploader";

    /**
     *
     */
    public initialize(appId: string, secret: string, appVersion: string): void
    {
        this.appId = appId;
        this.secret = secret;
        this.secretMap = {};
        this.secretMap[appId] = secret;
        this.appVersion = appVersion;
        this._isInitialized = true;
    };

    public initializeWithApps(defaultAppId: string, secretMap: { [key: string]: string; }, appVersion: string): void
    {
        this.appId = defaultAppId;
        this.secret = secretMap[defaultAppId];
        this.secretMap = secretMap;
        this.appVersion = appVersion;
        this._isInitialized = true;
    };

    public setServerUrl(serverUrl: string): void
    {
        this.serverUrl = serverUrl;

        if (this.serverUrl.endsWith("/dispatcherv2"))
        {
            this.serverUrl = this.serverUrl.substring(0, this.serverUrl.length - "/dispatcherv2".length);
        };

        while (this.serverUrl.length > 0 && this.serverUrl.charAt(this.serverUrl.length - 1) == '/')
        {
            this.serverUrl = this.serverUrl.substring(0, this.serverUrl.length - 1);
        };

        this.dispatcherUrl = this.serverUrl + "/dispatcherv2";
        this.fileUploadUrl = this.serverUrl + "/uploader";
    };



    public get getSessionId(): string
    {
        return this.sessionId;
    };

    public setSessionId(sessionId: string): void
    {
        if (sessionId !== "")
        {
            this._isAuthenticated = true;
        }
        else
        {
            this.packetId = -1;
        };

        this.sessionId = sessionId;
    };


    public get isInitialized(): boolean
    {
        return this._isInitialized;
    };

    public get isAuthenticated(): boolean
    {
        return this._isAuthenticated;
    };

    public setAuthenticated(): void
    {
        this._isAuthenticated = true;
        // start heart beat
    };

    public debugLog(message: string, isError?: boolean): void
    {
        if (this.debugEnabled === true)
        {
            if (isError)
            {
                console.error(message);
            }
            else
            {
                console.log(message);
            };
        };
    };

    public sendRequest(request: any): void
    {
        this.debugLog(`SendRequest: ${JSON.stringify(request)}`);

        this.sendQueue.push(request);

        if (!this.requestInProgress && !this.bundleDelayActive)
        {
            this.bundleDelayActive = true;
            setTimeout(() =>
            {
                this.bundleDelayActive = false;
                this.processQueue();
            }, 0);
        };

    };

    public resetCommunication(): void
    {
        this.stopHeartBeat();

        this.sendQueue = [];
        this.inProgressQueue = [];
        this.sessionId = "";
        this.packetId = -1;
        this._isAuthenticated = false;
        this.requestInProgress = false;

        this.resetErrorCache();
    };

    public resetErrorCache(): void
    {
        this.statusCodeCache = 403;
        this.reasonCodeCache = 40304;
        this.statusMessageCache = "No session";
    };

    public updateKillSwitch(service: string, operation: string,);


    public processQueue(): void
    {

    };

    public stopHeartBeat(): void
    {

    };

};