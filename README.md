# IKAROS AND PARTNERS

#### Web Public Area Frontend List
 - [01_Ikaros_Home_Page](https://orcunkilicaslan.github.io/IKAROS_Frontend/01_Ikaros_Home_Page.html)
 - [02_Ikaros_Sign_Up](https://orcunkilicaslan.github.io/IKAROS_Frontend/02_Ikaros_Sign_Up.html)
 - [02_Ikaros_Sign_In](https://orcunkilicaslan.github.io/IKAROS_Frontend/02_Ikaros_Sign_In.html)
 - [03_Ikaros_Job_Listings](https://orcunkilicaslan.github.io/IKAROS_Frontend/03_Ikaros_Job_Listings.html)
 - [03_Ikaros_Job_Listings_Boxes](https://orcunkilicaslan.github.io/IKAROS_Frontend/03_Ikaros_Job_Listings_Boxes.html)
 - [03_Ikaros_Job_Listings_JobFilter](https://orcunkilicaslan.github.io/IKAROS_Frontend/03_Ikaros_Job_Listings_JobFilter.html)
 - [04_Ikaros_Job_Detail](https://orcunkilicaslan.github.io/IKAROS_Frontend/04_Ikaros_Job_Detail.html)
 - [04_Ikaros_Job_Detail_Refer](https://orcunkilicaslan.github.io/IKAROS_Frontend/04_Ikaros_Job_Detail_Refer.html)
 - [04_Ikaros_Job_Detail_Refer_Success](https://orcunkilicaslan.github.io/IKAROS_Frontend/04_Ikaros_Job_Detail_Refer_Success.html)
 - [04_Ikaros_Job_Detail_Refer_Warning](https://orcunkilicaslan.github.io/IKAROS_Frontend/04_Ikaros_Job_Detail_Refer_Warning.html)
 - [04_Ikaros_Job_Detail_Refer_Error](https://orcunkilicaslan.github.io/IKAROS_Frontend/04_Ikaros_Job_Detail_Refer_Error.html)
 - [99_Component_Form_UI](https://orcunkilicaslan.github.io/IKAROS_Frontend/99_Component_Form_UI.html)
   

# NodeJS Kurulumu
  
### NodeJS Kurulumu  
Öncelikle **npm** paket yöneticimizin olması lazım, yoksa [NodeJS](https://nodejs.org/) ‘in resmi sitesi olan [nodejs.org](https://nodejs.org/en/download/)’tan NodeJS’i bilgisayarımıza yüklememiz gerek.  Yüklemeyi yaptıktan sonra _terminal_ yada _command prompt’_a  
  
     npm install --global gulp-cli  

yazmamız gerekmektedir. Bu sayade Gulp’un cli(Command Line Interface)sini bilgisayarımıza yüklemiş olacağız, bu bize Gulp’u terminalimizde **gulp** komutunu (command) kullanmamızı sağlıcaktır. Bu işlemi de yaptıktan sonra Gulp görevleri yazmaya başlayalım.  
  
  
#### Projeyi PC'ye İndirme  
Komut Satırına Aşağıdaki Kodu Yazın  

     git clone https://github.com/orcunkilicaslan/IKAROS_Frontend.git  

#### Projeyi PC'de Çalıştırma  
Komut Satırına Aşağıdaki Kodu Yazın  

     npm install
     npm install -g npm  


Projeyi Derleyecekseniz İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp build

Projede Çalışacaksanız İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp devel  