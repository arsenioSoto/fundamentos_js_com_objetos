const alunos = [{
        nome: "junior",
        codigo: "123234324",
        dependentes: [{
                nome: "Arsenio",
                parentesco: "Pai",
                dataNascimento: "12/12/1999"
            },
            {
                nome: "Crimilde",
                parentesco: "Mae",
                dataNascimento: "12/12/1999"
            }
        ],
    },

    {
        nome: "Soto",
        codigo: "89878797",
        dependentes: [{
            nome: "Jose",
            parentesco: "Filho",
            dataNascimento: "12/12/1999"
        }],
    }
]

const listaDependentes = [...alunos[0].dependentes, ...alunos[1].dependentes];

console.table(listaDependentes);