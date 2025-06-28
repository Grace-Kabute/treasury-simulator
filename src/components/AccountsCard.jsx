import usd from '../assets/USD.jpg'
import kes from '../assets/KES.jpg'
import ngn from '../assets/NGN.jpg'

const fallbackIcons = {
  KES: kes,
  USD: usd,
  NGN: ngn,
};

const AccountsCard = ({ name, icon, currency, balance, isCurrent = false }) => {
  const iconToUse = icon || fallbackIcons[currency];

  return (
    <div className="container AccountsCard name">
 
    
      <div className="account">
          <div>
            <div>
              <img
                src={iconToUse}
                alt={currency}
                width={40}
                height={40}
                className="image"
              />
            </div>
            {isCurrent && (
              <span>
                Current
              </span>
            )}
          </div>
               {name && (
            <div>
              {name}
            </div>
          )}
      </div>

      <div>
        {currency} {balance.toLocaleString()}
      </div>
    </div>
  );
};

export default AccountsCard;
