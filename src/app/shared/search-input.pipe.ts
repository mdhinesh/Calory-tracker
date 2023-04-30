import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'SearchFilter'
})

export class SearchPipe implements PipeTransform{
    transform(value: any, args?: any): any{
        if(!value)return null;
        if(!args)return value;
        args = args.toLowerCase();

        return value.filter(function(item: { name: any; }){
            return JSON.stringify(item.name).toLowerCase().includes(args);
        });    
    }
}