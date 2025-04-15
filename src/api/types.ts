export interface BaseResponse<T>{
    statusCode: number;
    message: string;
    response :T
}