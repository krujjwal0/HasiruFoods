import EarnRewardIcon from '_icons/reward/EarnRewardIcon.svg'
import EveryPurchaseIcon from '_icons/reward/EveryPurchaseIcon.svg'
import FreeDeliveryIcon from '_icons/reward/FreeDeliveryIcon.svg'
import OnDemandIcon from '_icons/reward/OnDemandIcon.svg'

import m1 from '_assets/images/rewards/m1/m1-3x.png'
import m2 from '_assets/images/rewards/m2/m2-3x.png'
import m3 from '_assets/images/rewards/m3/m3-3x.png'
import m4 from '_assets/images/rewards/m4/m4-3x.png'

export const OfferData = [
  {
    Icon: EveryPurchaseIcon,
    offer: '10% off',
    label: 'every purchase',
  },
  {
    Icon: FreeDeliveryIcon,
    offer: 'Free Delivery',
    label: '',
  },
  {
    Icon: OnDemandIcon,
    offer: 'On Demand',
    label: 'Subscription',
  },
  {
    Icon: EarnRewardIcon,
    offer: 'Earn Reward',
    label: 'points & redeem exciting prizes',
  },
]

export const RewardData = [
  {
    source: m1,
    points: '5 Points',
  },
  {
    source: m2,
    points: '20 Points',
  },
  {
    source: m3,
    points: '50 Points',
  },
  {
    source: m4,
    points: '100 Points',
  },
]
