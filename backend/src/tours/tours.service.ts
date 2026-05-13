import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Injectable()
export class ToursService {
  constructor(private prisma: PrismaService) {}

  async create(createTourDto: CreateTourDto, userId: string) {
    const slug = this.generateSlug(createTourDto.name);
    
    return this.prisma.tour.create({
      data: {
        ...createTourDto,
        slug,
        userId,
      },
      include: {
        scenes: true,
        hotspots: true,
      },
    });
  }

  async findAll(environmentId?: string, branchId?: string) {
    return this.prisma.tour.findMany({
      where: {
        ...(environmentId && { environmentId }),
        ...(branchId && { branchId }),
      },
      include: {
        scenes: true,
        hotspots: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.tour.findUnique({
      where: { id },
      include: {
        scenes: {
          include: {
            hotspots: true,
          },
        },
        hotspots: true,
        environment: true,
        branch: true,
      },
    });
  }

  async update(id: string, updateTourDto: UpdateTourDto) {
    return this.prisma.tour.update({
      where: { id },
      data: updateTourDto,
      include: {
        scenes: true,
        hotspots: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.tour.delete({
      where: { id },
    });
  }

  private generateSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');
  }
}
