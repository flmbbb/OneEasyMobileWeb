
import { TDataInfo, TFastApiRequest, TResult, TBaseUser, IResult, TModuleBase, TModuelInfo, TDBHelper } from "./BaseClass"
import { THTTPRequest } from "./helper/HTTPClient"
import { TGlobal } from "./helper/GlobalHelper"
import store, { TTokenInfo } from "@/store";
import { TStringHelper } from "./helper/StringHelper";

export interface IBaseAPI {
    createNewModuleInfo(): TFastApiRequest;
    fastAPI(qModuleInfo: TFastApiRequest): Promise<TResult>;
    userLogin(qUserCode: string, qUserPass: string, verCode?: string): Promise<IResult<TTokenInfo>>;
    userRegister(qUserInfo: TBaseUser): Promise<TResult>;
    userLoginOut(qUserInfo: TTokenInfo): Promise<TResult>;
    userChangePass(qOldPass: string, qNewPass: String): Promise<TResult>;
    uploadFile(qFormData: FormData): Promise<TResult>;
    userFaceFileIDBind(qFileID: string): Promise<TResult>;
    faceCheckByFileID(qFileID: string): Promise<TResult>;
    faceCompare(qSourceFile: string, qDestFile: string): Promise<TResult>;
    faceTokenAuthor(qDestFile: string): Promise<TResult>;
}

export default class TBaseAPI {
    public static createNewModuleInfo(): TFastApiRequest {
        return new TFastApiRequest();
    }
    //快速交互API
    public static async fastAPI(qModuleInfo: TFastApiRequest): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/FastAPI/FastModule");
        lRequest.data = qModuleInfo;
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //模板管理
    public static async getModuleList(): Promise<IResult<TModuleBase[]>> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/FastAPI/GetModuleList");
        lRequest.data = {}
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //获取模块信息
    public static async getModuleInfo(qModuleID: string): Promise<IResult<TModuelInfo>> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/FastAPI/GetModuleInfo/" + qModuleID);
        lRequest.data = {}
        lResult = await lRequest.getAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //保存模块信息
    public static async saveModuleInfo(qModuleInfo: TModuelInfo): Promise<IResult<TModuelInfo>> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/FastAPI/SaveModuleInfo");
        lRequest.data = qModuleInfo
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //添加模板
    public static async addModule(qAdd: TModuleBase): Promise<IResult<TModuleBase>> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/FastAPI/AddModule");
        lRequest.data = qAdd
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //删除模板
    public static async delModuleInfo(qModuleID: string): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/FastAPI/DelModuleInfo/" + qModuleID);
        lRequest.data = {}
        lResult = await lRequest.getAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //刷新服务端模板
    public static async initModule(): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/FastAPI/InitModule");
        lRequest.data = {}
        lResult = await lRequest.getAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //获取服务端账套配置
    public static async getDBList(qPass: string): Promise<IResult<TDBHelper>> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/DBHelp/GetDBList/" + qPass);
        lRequest.data = {}
        lResult = await lRequest.getAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //保存服务端账套配置
    public static async saveDBList(qDBHelper: TDBHelper): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/DBHelp/SaveDBList");
        lRequest.data = qDBHelper;
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //刷新服务端账套配置
    public static async refreshDBList(qPass: string): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/DBHelp/RefreshDBList/" + qPass);
        lRequest.data = {};
        lResult = await lRequest.getAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //初始化账套基本数据库
    public static async initDBFirst(qPass: string): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/fastService/DBHelp/InitDBFirst/");
        lRequest.data = {};
        lResult = await lRequest.getAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //用户角色登陆
    public static async userLogin(qLoginCode: string, qLoginPass: string, verCode: string = ""): Promise<IResult<TTokenInfo>> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/BaseUser/UserLogin");
        lRequest.data = { "loginCode": qLoginCode, "loginPass": qLoginPass, "verCode": verCode }
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        if (lResult.resultSuccess) {
            //写入全局信息
            if (lResult.resultData.tokenID == undefined) {
                lResult.resultSuccess = false;
                lResult.resultMsg = "登陆成功,但返回的信息格式不正确【" + JSON.stringify(lResult.resultData) + "】";
            }
            else {
                store.state.tokenInfo.isLogin = true;
                store.state.tokenInfo.tokenID = lResult.resultData.tokenID;
                store.state.tokenInfo.privateKey = lResult.resultData.privatekey;
                store.state.tokenInfo.loginCode = lResult.resultData.loginCode;;
                store.state.tokenInfo.userID = lResult.resultData.userID;
                store.state.tokenInfo.userName = lResult.resultData.userName;
                if (TStringHelper.stringIsEmpty(store.state.tokenInfo.privateKey)) {
                    store.state.tokenInfo.privateKey = "";
                }
                localStorage.setItem(TTokenInfo.storageName, JSON.stringify(store.state.tokenInfo));
            }
        }
        return lResult;
    }
    //用户角色注册
    public static async userRegister(qUserInfo: TBaseUser): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/BaseUser/UserRegister");
        lRequest.data = qUserInfo;
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //用户角色登出
    public static async userLoginOut(qUserInfo: TTokenInfo): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.url = TGlobal.urlCombination("/BaseUser/UserLoginOut");
        lRequest.data = qUserInfo;
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        if (lResult.resultSuccess) {
            //重新赋值一个新的
            TTokenInfo.initTokenInfo(qUserInfo);
        }
        return lResult;
    }
    //用户角色更改密码
    public static async userChangePass(qOldPass: string, qNewPass: String): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.setHeadersUrlencoded();
        lRequest.url = TGlobal.urlCombination("/BaseUser/UserChangePass");
        lRequest.data = "oldPass=" + qOldPass + "&newPass=" + qNewPass;
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //用户绑定 FFaceFileID
    public static async userFaceFileIDBind(qFileID: string): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.setHeadersUrlencoded();
        lRequest.url = TGlobal.urlCombination("/BaseUser/UserFaceFileIDBind");
        lRequest.url = TStringHelper.urlJoinParams(lRequest.url, "fileID", qFileID);
        lRequest.data = {};
        lResult = await lRequest.getAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //图片上传
    public static async uploadFile(qFormData: FormData): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.setHeadersUrlencoded();
        lRequest.url = TGlobal.urlCombination("/fastService/File/PostFile");
        lRequest.data = qFormData;
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //人脸--图片判断是不是人脸
    public static async faceCheckByFileID(qFileID: string): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.setHeadersUrlencoded();
        lRequest.url = TGlobal.urlCombination("/fastService/FaceApi/FaceCheckByFileID");
        lRequest.url = TStringHelper.urlJoinParams(lRequest.url, "fileID", qFileID);
        lRequest.data = {};
        lResult = await lRequest.getAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
    //人脸--图片人脸对比
    public static async faceCompare(qSourceFile: string, qDestFile: string): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.setHeadersUrlencoded();
        lRequest.url = TGlobal.urlCombination("/fastService/FaceApi/FaceCompare");
        lRequest.setHeadersUrlencoded();
        lRequest.data = "sourceFile=" + qSourceFile + "&destFile=" + qDestFile;
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }

    public static async faceTokenAuthor(qDestFile: string): Promise<TResult> {
        let lResult: TResult;
        let lRequest = THTTPRequest.createNew();
        lRequest.setHeadersUrlencoded();
        lRequest.url = TGlobal.urlCombination("/fastService/FaceApi/FaceTokenAuthor");
        lRequest.setHeadersUrlencoded();
        lRequest.data = "destFile=" + qDestFile;
        lResult = await lRequest.postAsync();
        if (lResult == null) {
            lResult = TResult.createNew();
            lResult.resultMsg = "异常消息:结果为null"
        }
        return lResult;
    }
}