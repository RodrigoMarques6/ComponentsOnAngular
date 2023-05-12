# Componentes no Angular:

## 1. Criar um componente com o comando ng generate component
Caso o componente precise ficar dentro da pasta components, criar com o seguinte comando:
ng generate component components/nome-do-componente

## 2. Entrar na raiz do projeto, no HTML do Angular e chamar os componentes 
Por exemplo: se criei um componente chamado fhater-component, deve-se chamá-lo
no HTML raiz assim: <app-father-component></app-father-component>

## 3. Entramos no componente pai que foi criado e na parte do export, adicionamos uma classe;
Iniciamos com "name!: string", onde a expressão "!" significa que estamos iniciando uma variável com valor vazio;
Perceba que precisamos tipar essa classe.
Agora eu tenho uma variável "name" que vai ser do tipo string, e que está pronta para ser exportada para o componente filho;

## 4. No HTML do componente pai, eu vou chamar o componente filho para iniciar a comunicação entre os componentes;

## 5. Podemos agora adicionar algo no componente filho para renderizar na tela;

## 6. Eu quero que o name que está sendo exportado lá no componente pai seja passado para o componente filho e o componente filho altere o valor dessa variável e envie de volta pro pai;

## 7. Para iniciar, preciso ir no HTML do componente pai e digitar [name] = "name". Vai ficar assim:
<app-child-component [name] = "name"></app-child-component>

## 8. O que eu fiz: passei a propriedade name que está no componente pai para uma propriedade chamada name que está no componente filho;

## 9. Modificamos o nome da variável, que antes era name e agora passou a ser childName, para ficar mais fácil o entendimento;

## 10. Entramos no componente filho, no TS, e adicionamos a classe na parte do export;

## 11. Para que o valor da propriedade criada seja transportada do componente pai para o filho, eu preciso dizer que o filho está esperando uma propriedade que se chama childName e que receberá dados do componente pai;
Para isso, utilizamos o Input, entre as chaves do impor, no TS do componente filho;
Na classe, na parte do export, nós adicionamos antes do nome da classe a expressão "@Input()", é uma função.

## 12. Agora nós fomos no TS do componente pai e atribuimos um valor à classe, no exemplo utilizei 'Rodrigo';

## 13. Após isso, fomos no HTML do componente filho e chamamos essa variável, da seguinte forma:
<h2>Nome: {{childName}}</h2>
Lembrando que parar chamar variáveis no Angular, utiliza-se duas chaves.