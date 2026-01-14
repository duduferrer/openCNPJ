# Biblioteca TS para consumo da OpenCnpjAPI

Biblioteca em typescript para consumo da API. Mais informações em: https://opencnpj.org/

#### Contribuições são bem vindas

## Uso/Exemplos

```
npm install opencnpj
```

```javascript
import { buscaCNPJ } from "opencnpj";



function main() {
  const cnpjInfo = await buscaCNPJ("00000000000000");
  const razaoSocial = cnpjInfo.razaoSocial;
}
```

## Retorno

```javascript
function buscaCNPJ(cnpj: string): Promise<{
    cnpj: string;
    razaoSocial: string;
    nomeFantasia: string;
    situacaoCadastral: string;
    dataSituacaoCadastral: Date | undefined;
    matrizFilial: "Matriz" | "Filial" | undefined;
    dataInicioAtividade: Date | undefined;
    cnaePrincipal: string;
    cnaesSecundarios: string[] | undefined;
    naturezaJuridica: string;
    endereco: Endereco;
    contato: Contato;
    capitalSocial: Number;
    porteEmpresa: string;
    opcaoSimples: string;
    dataOpcaoSimples: Date | undefined;
    opcaoMei: string;
    dataOpcaoMei: Date | undefined;
    socios: Socio[] | undefined;
    }>
```

```javascript
Contato {
  email: string | undefined;
  telefones: Telefone[] | undefined;
}
Telefone {
  ddd: string | undefined;
  numero: string | undefined;
  isFax: boolean | undefined;
}
```

```javascript
Socio {
  nome: string | undefined;
  cnpjOuCpf: string | undefined;
  qualificacao: string | undefined;
  dataEntrada: Date | undefined;
  identificador: "Pessoa Física" | "Pessoa Jurídica" | undefined;
  faixaEtaria: String | undefined;
}
```

```javascript
Endereco {
  logradouro: string | undefined;
  numero: string | undefined;
  complemento: string | undefined;
  bairro: string | undefined;
  cep: string | undefined;
  uf: string | undefined;
  municipio: string | undefined;
  toString() {
      return `${logradouro}, ${numero}, ${complemento} - ${bairro} - ${municipio}-${uf} - ${cep}`;
    }
}

```

## Erros:

```javascript
 ApiError:
  - Erros ao requisitar dados
  - 404: CNPJ não encontrado
  - 429: Limite de requisições excedido
  - Erro de rede ao acessar a API
  - Erro ao fazer parse da resposta

 cnpjError:
  - Erros na formatação do CNPJ
  - Erro na validaçao do CNPJ
  - Erro no tamanho do CNPJ
  - Erro de repetição de digitos no CNPJ
```

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
