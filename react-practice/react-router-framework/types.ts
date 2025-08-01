export type Contact = {
    id:number,
    name:string,
    email:string,

}
export type ContactCardProps = {
    name:string,
    path:string
}
/*
export type StatusLoading ={
    state:'LOADING'
}
    */
export type StatusSuccess = {
    state:'SUCCESS';
}
export type StatusError = {
    state:'ERROR',
    message:string
}
export type Status = StatusSuccess | StatusError