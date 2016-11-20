// let gameBoxes = ['1a', '2a', '3a',
//                  '1b', '2b', '3b',
//                  '1c', '2c', '3c'];

/*

let x = 'x';
let o = 'o';
let count = 0;
let o_win = 0;
let x_win = 0;





$('.box').on('click', function(){
//  WIN FOR 'O' //
if ( $("#oneA").hasClass('o') && $("#twoA").hasClass('o') && $("#threeA").hasClass('o') ||
     $("#oneB").hasClass('o') && $("#twoB").hasClass('o') && $("#threeB").hasClass('o') ||
     $("#oneC").hasClass('o') && $("#twoC").hasClass('o') && $("#threeC").hasClass('o') ||

     $("#oneA").hasClass('o') && $("#oneB").hasClass('o') && $("#oneC").hasClass('o') ||
     $("#twoA").hasClass('o') && $("#twoB").hasClass('o') && $("#twoC").hasClass('o') ||
     $("#threeA").hasClass('o') && $("#threeB").hasClass('o') && $("#threeC").hasClass('o') ||

     $("#oneA").hasClass('o') && $("#twoB").hasClass('o') && $("#threeC").hasClass('o') ||
     $("#oneC").hasClass('o') && $("#twoB").hasClass('o') && $("#threeA").hasClass('o') )
{
  $('#modal_Owins').show();
  setTimeout(() => $('#modal_Owins').hide(), 1000);
  $("#row .box").removeClass('disable');
  $("#row .box").removeClass('o');
  $("#row .box").removeClass('x');
}

 //  WIN FOR 'X' //
  else if ( $("#oneA").hasClass('x') && $("#twoA").hasClass('x') && $("#threeA").hasClass('x') ||
       $("#oneB").hasClass('x') && $("#twoB").hasClass('x') && $("#threeB").hasClass('x') ||
       $("#oneC").hasClass('x') && $("#twoC").hasClass('x') && $("#threeC").hasClass('x') ||

       $("#oneA").hasClass('x') && $("#oneB").hasClass('x') && $("#oneC").hasClass('x') ||
       $("#twoA").hasClass('x') && $("#twoB").hasClass('x') && $("#twoC").hasClass('x') ||
       $("#threeA").hasClass('x') && $("#threeB").hasClass('x') && $("#threeC").hasClass('x') ||

       $("#oneA").hasClass('x') && $("#twoB").hasClass('x') && $("#threeC").hasClass('x') ||
       $("#oneC").hasClass('x') && $("#twoB").hasClass('x') && $("#threeA").hasClass('x') )

  {  $('#modal_Xwins').show();
        setTimeout(() => $('#modal_Owins').hide(), 1000);
        $("#row .box").removeClass('disable');
        $("#row .box").removeClass('o');
        $("#row .box").removeClass('x');

  {  // debugger;
    else if (count === 9)

  {   $('#modal_Tie').show();
      setTimeout(() => $('#modal_Tie').hide(), 1000);
      $("#row .box").removeClass('disable');
      $("#row .box").removeClass('o');
      $("#row .box").removeClass('x');
      count = 0;

    } else if ($(this).hasClass('disable'))
      {
      alert('already selected');
    }
      else if (count % 2 === 0)
    {
        count++
        $(this).txt(o)
          $(this).addClass('disable')
      if ($("#oneA").hasClass('o') && $("#twoA").hasClass('o') && $("#threeA").hasClass('o') ||
           $("#oneB").hasClass('o') && $("#twoB").hasClass('o') && $("#threeB").hasClass('o') ||
           $("#oneC").hasClass('o') && $("#twoC").hasClass('o') && $("#threeC").hasClass('o') ||

           $("#oneA").hasClass('o') && $("#oneB").hasClass('o') && $("#oneC").hasClass('o') ||
           $("#twoA").hasClass('o') && $("#twoB").hasClass('o') && $("#twoC").hasClass('o') ||
           $("#threeA").hasClass('o') && $("#threeB").hasClass('o') && $("#threeC").hasClass('o') ||

           $("#oneA").hasClass('o') && $("#twoB").hasClass('o') && $("#threeC").hasClass('o') ||
           $("#oneC").hasClass('o') && $("#twoB").hasClass('o') && $("#threeA").hasClass('o') )
         }
        }
      }
    }
  }
});  0 1 2
     3 4 5
     6 7 8

*/
