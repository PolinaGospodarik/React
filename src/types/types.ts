import React from "react";

export type TTitle = {
    children: string;
}

export type TButton = {
    content: string;
    typeButton: string;
    buttonState: boolean;
}

export type TInput ={
    compound: string,
    inputType: string,
    isActive: boolean,
    title: string,
    errorText: string,
    isError: boolean,
}

export type TPost = {
    id: number,
    image: string,
    text?: string,
    date: string,
    lesson_num?: number,
    title: string,
    description?: string,
    author?: number
    onFavoriteToggle?: (event: React.MouseEvent, post: TPost) => void,
    isFavorite?: boolean
}

export type TFavoritePost = TPost & {
    onFavoriteToggle: (event: React.MouseEvent, post: TPost) => void;
    isFavorite: boolean;
}

export type TTabsElements = {
    children: string;
    buttonState: boolean;
    changeActive: ()=>void;
}

export type TTextarea = {
    compound: string;
    placeholderText: string;
}

export type TUserName = {
    children: string;
}

export type TContext =[
    string,
    (value: string) => void
]