$(function () {
    var jsonData = {
        categoryArry: ["All", "Atype", "Btype", "Ctype"],
        booksArray: [["Atype-1", "Atype-2", "Atype-3", "Atype-4"],
        ["Btype-1", "Btype-2", "Btype-3"],
        ["Ctype-1", "Ctype-2", "Ctype-3", "Ctype-4", "Ctype-5"]]
    };

    var $body = $('body'),
        $radioPArea = $body.find('.radio-p-area'),
        $displayDivArea = $body.find('.display-div-area');

    // ラジオボタン生成
    $radioPArea.each(function () {

        for (var category in jsonData.categoryArry) {
            $(this).append("<input type=\"radio\" name=\"lang\" value=\"" + jsonData.categoryArry[category] + "\" checked=\"\">" + jsonData.categoryArry[category])
        }
        // $(this).find('input[name=lang]:eq(0)').attr('checked', 'checked');

        $displayDivArea.empty();
        for (var books in jsonData.booksArray) {
            $displayDivArea.append('<div id="' + jsonData.categoryArry[Number(books) + 1] + '" class="category-div-area div-none">');
            $categoryDivArea = $displayDivArea.find('#' + jsonData.categoryArry[Number(books) + 1]);
            $categoryDivArea.append('<div class="float-clear">Category : ' + jsonData.categoryArry[Number(books) + 1] + '</div>');
            $categoryDivArea.append('<div class="float-clear">');
            for (var book in jsonData.booksArray[books]) {
                $categoryDivArea.append('<div class="book-div">' + jsonData.booksArray[books][book] + '</div>');
                $categoryDivArea.animate({
                    display: none
                }, 1500);
            }
            $categoryDivArea.append('</div>');
            $categoryDivArea.append('</div>');
        }

        //ラジオボタンイベント
        $('input[name="lang"]:radio').change(function () {
            // alert( $( this ).val()); // valueを表示  
            var cateNum = 0;
            for (var category in jsonData.categoryArry) {
                if (jsonData.categoryArry[category] === $(this).val()) {
                    break;
                }
                cateNum++;
            }

            if (cateNum === 0) {
                for (var category in jsonData.categoryArry) {
                    if ("All" !== jsonData.categoryArry[category]) {
                        $displayDivArea.find('#' + jsonData.categoryArry[category]).removeClass('div-none', 1000, 'easeOutBounce');
                        $displayDivArea.find('book-div').each(function () {
                            $(this).animate({
                                display: inline-block
                            }, 1500);
                        });
                    }

                }
            } else {
                for (var category in jsonData.categoryArry) {
                    if ("All" !== jsonData.categoryArry[category]) {
                        // if (jsonData.categoryArry[category] === $(this).val()) {
                        //     $displayDivArea.find('#' + jsonData.categoryArry[category]).removeClass('div-none', 1000, 'easeOutBounce');
                        //     $displayDivArea.find('book-div').each(function () {
                        //         $(this).animate({
                        //             display: inline - block
                        //         }, 1500);
                        //     });
                        } else {
                            $displayDivArea.find('#' + jsonData.categoryArry[category]).addClass('div-none', 1000, 'easeOutBounce');
                            // $displayDivArea.find('book-div').each(function () {
                            //     $(this).animate({
                            //         display: none
                            //     }, 1500);
                            // });
                        }
                    }

                }
            }

            // if(cateNum === 0){
            //     // 全て表示
            //     $displayDivArea.empty();
            //     for(var books in jsonData.booksArray){
            //         $displayDivArea.append('<div class="float-clear">Category : ' + jsonData.categoryArry[Number(books) + 1] +'</div>');
            //         $displayDivArea.append('<div class="float-clear">');
            //         for(var book in jsonData.booksArray[books]){
            //             $displayDivArea.append('<div class="book-div">' + jsonData.booksArray[books][book] +'</div>')
            //         }
            //         $displayDivArea.append('</div>');
            //     }
            // }else{
            //     // 選択されたカテゴリーを表示
            //     $displayDivArea.empty();
            //     $displayDivArea.append('<div>Category : ' + jsonData.categoryArry[cateNum] +'</div>');
            //     $displayDivArea.append('<div>');
            //     for(var book in jsonData.booksArray[cateNum-1]){
            //         $displayDivArea.append('<div class="book-div">' + jsonData.booksArray[cateNum-1][book] +'</div>');
            //     }
            //     $displayDivArea.append('</div>');
            // }

        });
    });
});