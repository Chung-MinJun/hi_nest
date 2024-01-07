import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entities';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-move.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) { }

    @Get()
    getAll(@Req() req, @Res() res): Movie[] {
        res.json() //to use express not recommended.
        return this.moviesService.getAll();
    }


    // @Get('search')
    // search(@Query('yer') searchingYear:string){
    //     return `Searching movie made after: ${searchingYear}`;
    // }

    @Get(':id')
    getOne(@Param('id') movieID: number): Movie {
        console.log(typeof movieID) 
        return this.moviesService.getOne(movieID);
    }

    @Post()
    create(@Body() movieData:CreateMovieDTO) {
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieID: number) {
        return this.moviesService.deleteOne(movieID);
    }

    @Patch(':id')
    path(@Param('id') movieID: number, @Body() updateData:UpdateMovieDTO) {
        return this.moviesService.update(movieID, updateData);
    }


}