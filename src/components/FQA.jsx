import React from 'react'
import { useState } from 'react'

const FQA = () => {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <div className='wrapper'>
      <div><h1>Tez-tez verilən suallar</h1></div>
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected == i ? '-' : '+'}</span>
            </div>
            <div className={selected == i ? 'content show' : 'content'}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
const data = [
  {
    question: 'SMART CUSTOMS',
    answer: 'Hörmətli istifadəçi, gömrük qanunvericiliyinə edilən son dəyişikliyə əsasən bağlamanız "Xarici anbardadır" statusu aldıqdan sonra yeni tətbiq olunan "Smart Customs" mobil proqram təminatı və ya e.customs.gov.az vasitəsi ilə məhsulunuzu sizə təqdim edəcəyimiz "WNX" ilə başlayan izləmə nömrəsini (bağlama nömrəsini) qeyd etməklə (məs: WNX44221234) bəyan etməyiniz mütləqdir. Əks halda bağlamanız Bakıya göndərilməyəcəkdir. Bağlamanızın tərkibində olan məhsul barədə ətraflı məlumat almaq üçün şəxsi kabinetinizdə "Bağlamalarım" bölməsinə daxil olduqdan Bağlamalarınız haqqında bütün məlumatları Smart Customsa qeyd edə bilərsiniz. “Smart Customs” mobil tətbiqindən və ya e.customs.gov.az veb saytından bəyanetmə «ASAN Login» sisteminə daxil olmaqla yalnız «Fərdi identifikasiya nömrəsi» (FİN), «Elektron-imza» və ya «ASAN İmza» vasitələri ilə mümkündür. Autentifikasiya vasitələrindən müvafiq olaraq biri seçilməlidir. "Bağlamanız xarici anbardadır" SMS bildirişini aldıqdan sonra bağlamanızı bəyan edə bilərsiniz.'
  },
  {
    question: 'Yük anbarda nə qədər saxlanılır?',
    answer: 'Sizin bağlamanız bizim xarici və yerli anbarın hər birində yalnız 15 gün saxlanılır. Daha sonra isə yükün saxlandığı hər gün üçün elavə 0.5 manat tətbiq olunacaq. 45 gündən sonra isə bağlama ləğv ediləcək.'
  },
  {
    question: 'Sifarişlərimi necə izləyə bilərəm?',
    answer: 'Onlayn mağazalardan aldığınız məhsulu Türkiyə anbarımıza daxil olduqdan sonra şəxsi kabinetinizdə “Sifarişimi izlə bölməsindən izləyə bilərsiniz.'
  },
  {
    question: 'Hansı məhsullar gətirilmir?',
    answer:   `Azərbaycan Respublikasına fiziki şəxslər tərəfindən gətirilməsi və beynəlxalq poçt göndərişləri vasitəsilə alınması qadağan olunmuş məhsullar aşağıdakılardır:  
    Hər cür silah növləri, döyüş sursatı, (ov silahları üçün sursatlar istisna edilməklə) hərbi təyinatlı bütün əşyalar, hərbi texnika.
    Radioaktiv maddələr, narkotik və psixotrop maddələr və onlardan istifadə üçün ləvazimat, müxtəlif zəhərləyicilər.
    Qida, spirtli içkilər, tütün və tütün məmulatları.
    Xüsusi məxfi  rabitə vasitələri, gizli kamera, gizli səs yazma, dron və digər casus avadanlıqlar.
    Müdafiə, Milli Təhlükəsizlik və Daxili İşlər nazirliklərinin operativ istintaq fəaliyyəti üzrə informasiya sistemləri, sənədləri və arxivləri.`
  },
  {
    question: 'Ofisiniz harada yerləşir?',
    answer: 'Ofisimiz Nəsimi rayonu Tblisi prospekti 100, 20 Yanvar metrosunun Velotrek çıxışından 50 metr aşağıya Bravoya düşən yolun sol tərəfində Navastroykanın altında yerləşir.'
  },
  {
    question: 'Çatdırılma haqqı necə hesablanır?',
    answer: 'Sifariş olunan bağlamanın çatdırılma haqqı çəkiyə görə Qrama-qram hesablanır.(1 kg = 3.99$)'
  },
  {
    question: 'Nə qədər məbləğdə sifariş edə bilərəm?',
    answer: 'Azərbaycan Respublikası qanunvericiliyinə görə, fiziki şəxslər 30 təqvim günü ərzində kommersiya məqsədi olmadan 300 ABŞ dolları məbləğində  rüsumsuz limitdən istifadə edə  bilərlər.'
  },
  {
    question: 'Ödəməni necə edirəm?  ',
    answer: `1.ci üsul sizin rahatçılığınız üçün bibaşa  Whatsaap nömrəmizə (0704300878) və ya İnstagram səhifəmizə linkləri atmaqla biz sizin üçün sifaris  edirik. \n
             2 ci üsul isə Saytımızda sifariş et bölməsindən linkləri göndərdikdən sonra Sifarişlərim bölməsində göndərdiyiniz məhsulun ödənişini TL balansına Plastik Kart vasitəsi ilə artırmaqla ödəniş edə bilərsiniz. Bağlamanıızın çatdırılma ( Karqo)haqqını ödəmək üçün isə Balansı artır  bölməsindən AZN balansınızı artıraraq ödəniş edə bilərsiniz.AZN balansına Plastik Kart vasitəsi ilə və ya E- manat və Milliön ödəniş terminalları vasitəsi ilə artıra bilərsiniz.`
  },
  {
    question: 'Azərbaycan kartlarını qəbul etməyən saytlardan necə sifariş edə bilərəm ?',
    answer: 'Əgər Sizin kartınız alış-veriş etmək istədiyiniz saytda qəbul olunmursa, o zaman biz sizə "Sifariş et" xidmətini təklif edirik. Əvvəlcə bizim saytda qeydiyyatdan keçirsiniz. Qeydiyyatdan dərhal sonra yaranmış "Şəxsi Kabinetim" bölməsinə daxil olursunuz və "Sifariş et" bölməsindən bəyəndiyiniz məhsulun linkini seçib əlavə edirsiniz. Sistem Sizə məhsulun qiymətini, ölçüsünü, sifariş etdiyiniz ölkədaxili karqo qiymətini və bizim Sizin üçün etdiyimiz sifarişdəki +3 faizlik xərcləri əlavə etməklə yekun məbləği təqdim edəcək. ( Bu məlumatlardan hər hansı biri olmadıqda, onu özünüz əlavə edirsiniz) Linkləri saytımıza göndərdikdən sonra bizim hesabımıza yekun məbləği ödəyirsiniz və biz həmin məhsulu sizin üçün alırıq. Belə olan halda Bəyannamə də bizim əməkdaşlar tərəfindən əlavə edilir.'
  },
  {
    question: 'Sifarişim neçə günə çatdırılır ?',
    answer: 'Sifarişiniz Satıcı firma tərəfindən Bizim Türkiyədəki ofisimizə çatdırıldıqdan sorna 3-5 gün ərzində məhsullar Bakı ofisimizdə olur.Həftə sonları və rəsmi bayram günləri çatdırılma müddətini uzada bilər.'
  },
  {
    question: 'Türkiyədən necə sifariş edə bilərəm?',
    answer: 'Əgər siz öz kartınızla məhsul sifariş etmək istəyirsinizsə, ilk olaraq saytımızdan qeydiyyatdan keçməlisiniz. Daha sonra satıcı firma tərəfindən Sizdən tələb olunan ünvan bölməsinə bizim Türkiyə ofisimizin ünvanımızı qeyd edirsiniz.Türkiyə ofisimizin ünvanı Şəxsi kabinetinizdə olan “Türkiyədəki ünvanım” bölməsindən Əldə edə bilərsiniz. Sizdən Onay Kodu isteniləcək o zaman derhal bizimlə əlaqə yaradıb onay kodunu əldə edə bilərsiniz.'
  },
  
]

export default FQA
