import { ApiProperty } from "@nestjs/swagger";
import { count } from "console";
import { last } from "rxjs";

export class CreateEmployDto {
@ApiProperty()
name: string;

@ApiProperty({required:false})
description?:string;
@ApiProperty()
lastSee:string;

@ApiProperty()
countLastSee:number;

@ApiProperty({required:false, default:false})
register?: boolean=false;
}
k