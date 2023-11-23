def score_a_hand(cards):
    suit = cards[0][-1]
    rank = [
        {'id': 14, 'card': 'A'}, {'id': 13, 'card': 'K'}, {'id': 12, 'card': 'Q'}, {'id':           11, 'card': 'J'},
        {'id': 10, 'card': '10'}, {'id': 9, 'card': '9'}, {'id': 8, 'card': '8'}, {'id': 7,         'card': '7'},
        {'id': 6, 'card': '6'}, {'id': 5, 'card': '5'}, {'id': 4, 'card': '4'}, {'id': 3,           'card': '3'},
        {'id': 2, 'card': '2'}
          ]
    matchup = []
    
    # Filter cards based on the suit
    for x in cards:
      if x[-1] == suit: 
        matchup.append(x[:-1])

    highest_rank_card = None
    highest_rank_id = 0

    for card in matchup:
      for card_dict in rank:
          if card_dict['card'] == card and card_dict['id'] > highest_rank_id:
              highest_rank_card = card
              highest_rank_id = card_dict['id']

    return highest_rank_card + suit
      