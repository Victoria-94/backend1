import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Datos específicos para tres empleados
  const employData = [
    {
      id: "b1a45682-3cdd-11ed-b878-0242ac120002",
      name: "John Doe",
      age: 28,
      gerner: "Male",
      createdAt: new Date('2023-01-15T09:24:00'),
      updateAt: new Date('2024-05-20T12:00:00')
    },
    {
      id: "b1a4595e-3cdd-11ed-b878-0242ac120002",
      name: "Jane Smith",
      age: 34,
      gerner: "Female",
      createdAt: new Date('2022-05-10T14:45:00'),
      updateAt: new Date('2024-05-21T10:30:00')
    },
    {
      id: "b1a45b18-3cdd-11ed-b878-0242ac120002",
      name: "Alice Johnson",
      age: 45,
      gerner: "Female",
      createdAt: new Date('2021-07-20T17:00:00'),
      updateAt: new Date('2024-05-22T09:15:00')
    }
  ];

  // Inserta los datos en la base de datos
  for (const data of employData) {
    await prisma.employ.create({ data });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  
