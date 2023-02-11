import pickle
import numpy as np

sav_file = 'finalized_model.sav'


def get_predictions(Gender,WFH,Designation,Resource_Allocation,Mental_Fatigue_Score):
  arr = np.array([[Gender,WFH,Designation,Resource_Allocation,Mental_Fatigue_Score]])
  loaded_model = pickle.load(open(sav_file, 'rb'))
  pred = loaded_model.predict(arr)
  return pred
