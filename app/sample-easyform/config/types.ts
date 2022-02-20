export type Tags = string[];

// 表单数据
export interface IFormValues {
  name: string;
  age: string;
}

// 接口返回的表单详情
export interface IResponseDto {
  name: string;
  age: number;
}

// 提交表单的数据
export interface ICreateDto {
  name: string;
  age: number;
}
