import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentsLibService {
  private readonly apiKey: string;
  private readonly storeId: string;
  private readonly apiUrl = 'https://api.lemonsqueezy.com/v1/checkouts';

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get('LEMON_SQUEEZY_API_KEY');
    this.storeId = this.configService.get('LEMON_SQUEEZY_STORE_ID');
  }

  async createCheckoutSession() {
    /* This is a sample request to create a checkout session.
     * Change the appropriate values to create a checkout session for a user.
     */
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        data: {
          type: 'checkouts',
          attributes: {
            checkout_data: {
              custom: {
                userId: 'sample',
                email: 'sample@sample.com',
              },
            },
            product_options: {
              redirect_url: `https://google.com`,
            },
          },
          relationships: {
            store: {
              data: {
                type: 'stores',
                id: this.storeId,
              },
            },
            variant: {
              data: {
                type: 'variants',
                id: '1',
              },
            },
          },
        },
      }),
    });

    const jsonResponse = await response.json();

    return jsonResponse;
  }
}
