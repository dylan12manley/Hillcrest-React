import $ from 'jquery';
import 'foundation/js/foundation/foundation';
import 'foundation/js/foundation/foundation.dropdown';
import 'foundation/js/foundation/foundation.reveal';
import utils from 'bigcommerce/stencil-utils';

export default function () {
    let $modal = $('#modal'),
        $modalBody = $('.modal-body', $modal),
        $modalOverlay = $('.loadingOverlay', $modal);

    $('.quickview').on('click', (event) => {
        let productId = $(event.currentTarget).data('product-id');

        event.preventDefault();

        // clear the modal
        $modalBody.html('');
        $modalOverlay.show();

        // open modal
        $modal.foundation('reveal', 'open');

        utils.api.product.getById(productId, {template: 'products/quick'}, (err, response) => {
            $modalOverlay.hide();
            $modalBody.html(response);
        });
    });
}