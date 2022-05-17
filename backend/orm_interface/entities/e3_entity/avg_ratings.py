from sqlalchemy import String, Column, Integer
from orm_interface.base import Base


class  Avg_ratings(Base):
    __tablename__ = "avg_ratings"

    id = Column(String, primary_key=True)
    fairness = Column(Integer)
    support = Column(Integer)
    material = Column(Integer)
    fun = Column(Integer)
    comprehensibility = Column(Integer)
    interesting = Column(Integer)
    grade_effort = Column(Integer)

    def __init__(self, id, fairness, support, material, fun, comprehensibility,
                    intersting, grade_effort):

        self.id = id
        self.fairness = fairness
        self.support = support
        self.material = material
        self.fun = fun
        self.comprehensibility = comprehensibility
        self.interesting = intersting
        grade_effort = grade_effort



